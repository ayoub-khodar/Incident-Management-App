package com.example.demo.service.impl;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.stream.Stream;

import com.example.demo.entity.Article;
import com.example.demo.entity.Role;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;


public class ExportArticleService {
	public static ByteArrayInputStream articlesPDFReport(List<Article> articles) {
		Document document = new Document();
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		try {
			PdfWriter.getInstance(document, out);
			document.open();
			
			//add text to pdf file
			com.itextpdf.text.Font font = FontFactory.getFont(FontFactory.COURIER, 14, BaseColor.BLACK);
			Paragraph para = new Paragraph("Articles List", font);
			para.setAlignment(Element.ALIGN_CENTER);
			document.add(para);
			document.add(Chunk.NEWLINE);
			
			PdfPTable table = new PdfPTable(5);
			
			//make column titles
			Stream.of("Famille", "Numero de commande" , "Reference", "Fournisseur" , "Quantite").forEach(
					headerTitle -> {
						PdfPCell header = new PdfPCell();
						com.itextpdf.text.Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
						header.setBackgroundColor(BaseColor.LIGHT_GRAY);
						header.setHorizontalAlignment(Element.ALIGN_CENTER);
						header.setBorderWidth(1);
						header.setPhrase(new Phrase(headerTitle, headFont));
						table.addCell(header);
					});
			for(Article art: articles) {
				PdfPCell titleCell = new PdfPCell(new Phrase(art.getCategorie()));
				titleCell.setPaddingLeft(1);
				titleCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				titleCell.setHorizontalAlignment(Element.ALIGN_LEFT);
				table.addCell(titleCell);
				
				PdfPCell nbcCell = new PdfPCell(new Phrase(art.getNbc()));
				nbcCell.setPaddingLeft(1);
				nbcCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				nbcCell.setHorizontalAlignment(Element.ALIGN_LEFT);
				table.addCell(nbcCell);
				
				PdfPCell refCell = new PdfPCell(new Phrase(art.getRef()));
				refCell.setPaddingLeft(1);
				refCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				refCell.setHorizontalAlignment(Element.ALIGN_LEFT);
				table.addCell(refCell);
				
				PdfPCell fourCell = new PdfPCell(new Phrase(art.getFournisseur()));
				fourCell.setPaddingLeft(1);
				fourCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				fourCell.setHorizontalAlignment(Element.ALIGN_LEFT);
				table.addCell(fourCell);
				
				PdfPCell quanCell = new PdfPCell(new Phrase(art.getQuantite()));
				quanCell.setPaddingLeft(1);
				quanCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
				quanCell.setHorizontalAlignment(Element.ALIGN_LEFT);
				table.addCell(quanCell);
				
//				PdfPCell dateCell = new PdfPCell(new Phrase((String)(art.getDateLivraison())));
//				dateCell.setPaddingLeft(1);
//				dateCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
//				dateCell.setHorizontalAlignment(Element.ALIGN_LEFT);
//				table.addCell(dateCell);
			}
				document.add(table);
				document.close();
			
		} catch (DocumentException e) {
			e.printStackTrace();
		}
		return new ByteArrayInputStream(out.toByteArray());
	}
	
		public static ByteArrayInputStream articlesExcelReport(List<Article> articles) throws IOException {
			String[] columns = { "ID", "Famille", "Numero de commande" , "Reference", "Fournisseur" , "Quantite", "Date Livraison" };
			try (Workbook workbook = new XSSFWorkbook();
					ByteArrayOutputStream out = new ByteArrayOutputStream();){
					CreationHelper creationHelper = workbook.getCreationHelper();
					
					Sheet sheet  = workbook.createSheet("Articles");
					sheet.autoSizeColumn(columns.length);
					
					Font headerFont = workbook.createFont();
					headerFont.setBold(true);
					headerFont.setColor(IndexedColors.BLUE.getIndex());
					
					CellStyle cellStyle = workbook.createCellStyle();
					cellStyle.setFont(headerFont);
					
					// Row for header
					Row headerRow = sheet.createRow(0);
					
					//header
					for(int col=0; col<columns.length ; col++) {
						Cell cell = headerRow.createCell(col);
						cell.setCellValue(columns[col]);
						cell.setCellStyle(cellStyle);
					}
					
					CellStyle cellStyle1 = workbook.createCellStyle();
					cellStyle1.setDataFormat(creationHelper.createDataFormat().getFormat("#"));
					
					int rowIndex = 1;
					for(Article article: articles) {
						Row row = sheet.createRow(rowIndex++);
						
						row.createCell(0).setCellValue(article.getId());
						row.createCell(1).setCellValue(article.getCategorie());
						row.createCell(2).setCellValue(article.getNbc());
						row.createCell(3).setCellValue(article.getRef());
						row.createCell(4).setCellValue(article.getFournisseur());
						row.createCell(5).setCellValue(article.getQuantite());
						row.createCell(6).setCellValue(article.getDateLivraison());
					}
					workbook.write(out);
					return new ByteArrayInputStream(out.toByteArray());
			}
		}

}
