import fitz  # PyMuPDF
import os
import glob

def convert_pdf_to_images(pdf_path, output_dir="./temp_pages"):
    """
    将PDF文件的每一页导出为图片并存放到指定目录。
    """
    # 确保输出目录存在
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"创建目录: {output_dir}")

    # 打开PDF
    if not os.path.exists(pdf_path):
        print(f"错误: 找不到文件 {pdf_path}")
        return

    print(f"正在处理: {pdf_path}")
    doc = fitz.open(pdf_path)
    
    # 设置分辨率 (DPI = 300)
    # 默认是 72 DPI, 300 DPI 质量较好
    zoom = 300 / 72
    matrix = fitz.Matrix(zoom, zoom)

    for page_index in range(len(doc)):
        page = doc[page_index]
        
        # 导出图片
        pix = page.get_pixmap(matrix=matrix, alpha=False)
        
        # 构造文件名 page-1.png, page-2.png...
        output_file = os.path.join(output_dir, f"page-{page_index + 1}.png")
        
        # 保存
        pix.save(output_file)
        print(f"已保存: {output_file} (页面 {page_index + 1}/{len(doc)})")

    doc.close()
    print(f"\n成功！所有页面已保存至 {output_dir}")

if __name__ == "__main__":
    # 自动搜索当前目录下的PDF文件
    pdf_files = glob.glob("*.pdf")
    
    if not pdf_files:
        print("当前目录下未找到PDF文件。")
    else:
        # 如果有多个PDF，处理所有PDF或者第一个
        # 这里默认处理第一个
        target_pdf = pdf_files[0]
        convert_pdf_to_images(target_pdf)
