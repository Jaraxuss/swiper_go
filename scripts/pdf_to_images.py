#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PDF 转图片工具

功能说明:
    将 PDF 文件的每一页导出为 PNG 图片格式。

使用方法:
    1. 直接运行: python pdf_to_images.py
       - 会自动搜索当前目录下的 PDF 文件并转换
    2. 作为模块导入:
       from pdf_to_images import convert_pdf_to_images
       convert_pdf_to_images("example.pdf", output_dir="/path/to/output")

依赖项:
    - PyMuPDF (fitz): pip install pymupdf

作者: Auto-generated
日期: 2026-01-17
"""

import fitz  # PyMuPDF - PDF 处理核心库
import os
import glob

# ============================================================
# 配置项 - 可根据需要修改
# ============================================================

# 默认输出目录: 项目根目录下的 temp_pages 文件夹
# 脚本位于 scripts/ 目录下，所以需要向上一级到项目根目录
DEFAULT_OUTPUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "temp_pages"
)

# 导出图片的 DPI 设置 (默认 300 DPI，质量较好)
# 72 DPI 为屏幕标准，300 DPI 适合打印
DEFAULT_DPI = 300


def convert_pdf_to_images(pdf_path, output_dir=None, dpi=DEFAULT_DPI):
    """
    将 PDF 文件的每一页导出为图片并存放到指定目录。

    参数:
        pdf_path (str): PDF 文件的路径（相对路径或绝对路径）
        output_dir (str, optional): 图片输出目录。
                                    默认为项目根目录下的 temp_pages 文件夹。
        dpi (int, optional): 导出图片的分辨率，默认 300 DPI。

    返回:
        list: 成功导出的图片文件路径列表，失败时返回空列表

    示例:
        # 使用默认输出目录
        convert_pdf_to_images("example.pdf")

        # 指定输出目录
        convert_pdf_to_images("example.pdf", output_dir="./my_output")

        # 指定分辨率
        convert_pdf_to_images("example.pdf", dpi=150)
    """
    # 如果未指定输出目录，使用默认目录
    if output_dir is None:
        output_dir = DEFAULT_OUTPUT_DIR

    # 获取 PDF 文件的基础名称（不含扩展名），用于生成输出文件名
    pdf_basename = os.path.splitext(os.path.basename(pdf_path))[0]

    # 存储成功导出的文件路径
    exported_files = []

    # --------------------------------------------------------
    # 步骤 1: 确保输出目录存在
    # --------------------------------------------------------
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"📁 创建目录: {output_dir}")

    # --------------------------------------------------------
    # 步骤 2: 验证 PDF 文件是否存在
    # --------------------------------------------------------
    if not os.path.exists(pdf_path):
        print(f"❌ 错误: 找不到文件 {pdf_path}")
        return exported_files

    print(f"📄 正在处理: {pdf_path}")
    print(f"📂 输出目录: {output_dir}")
    print(f"🔍 分辨率: {dpi} DPI")
    print("-" * 50)

    # --------------------------------------------------------
    # 步骤 3: 打开并处理 PDF 文件
    # --------------------------------------------------------
    doc = fitz.open(pdf_path)
    total_pages = len(doc)

    # 计算缩放比例 (目标 DPI / 默认 72 DPI)
    zoom = dpi / 72
    matrix = fitz.Matrix(zoom, zoom)

    # --------------------------------------------------------
    # 步骤 4: 逐页导出为图片
    # --------------------------------------------------------
    for page_index in range(total_pages):
        page = doc[page_index]

        # 将页面渲染为像素图（不含透明通道）
        pix = page.get_pixmap(matrix=matrix, alpha=False)

        # 构造文件名: 源文件名_序号.png (序号从 1 开始)
        # 例如: example_1.png, example_2.png, ...
        output_filename = f"{pdf_basename}_{page_index + 1}.png"
        output_file = os.path.join(output_dir, output_filename)

        # 保存图片文件
        pix.save(output_file)
        exported_files.append(output_file)

        print(f"✅ 已保存: {output_filename} (页面 {page_index + 1}/{total_pages})")

    # --------------------------------------------------------
    # 步骤 5: 清理并输出结果
    # --------------------------------------------------------
    doc.close()
    print("-" * 50)
    print(f"🎉 成功！共导出 {len(exported_files)} 张图片至 {output_dir}")

    return exported_files


def main():
    """
    主函数 - 命令行入口

    自动搜索当前目录下的 PDF 文件并进行转换。
    如果有多个 PDF 文件，将全部处理。
    """
    # 搜索当前目录下的所有 PDF 文件（不区分大小写）
    pdf_files = glob.glob("*.pdf") + glob.glob("*.PDF")
    # 去重（针对大小写不敏感的文件系统）
    pdf_files = list(set(pdf_files))

    if not pdf_files:
        print("⚠️  当前目录下未找到 PDF 文件。")
        print("💡 请将 PDF 文件放置在当前目录，或使用模块方式调用:")
        print("   from pdf_to_images import convert_pdf_to_images")
        print("   convert_pdf_to_images('your_file.pdf')")
        return

    print(f"🔎 找到 {len(pdf_files)} 个 PDF 文件:")
    for pdf in pdf_files:
        print(f"   - {pdf}")
    print()

    # 处理所有找到的 PDF 文件
    for pdf_file in pdf_files:
        convert_pdf_to_images(pdf_file)
        print()  # 添加空行分隔不同文件的输出


if __name__ == "__main__":
    main()
