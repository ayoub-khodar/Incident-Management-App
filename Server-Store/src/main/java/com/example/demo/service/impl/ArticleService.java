package com.example.demo.service.impl;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.example.demo.entity.Article;
import com.example.demo.repository.ArticleRepository;
import com.example.demo.service.IArticleService;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
@Primary
public class ArticleService implements IArticleService{

	@Autowired
	private ArticleRepository articleRepository;
	
	@Override
	public List<Article> getArticles() {
		return articleRepository.findAll();
	}

	@Override
	public void addArticle(Article article) {
		articleRepository.save(article);
	}

	@Override
	public void updateArticle(Article article) {
		articleRepository.save(article);
	}

	@Override
	public void deleteArticle(Long id) {
		Article article = new Article();
		article.setId(id);
		articleRepository.delete(article);
	}
	
	public String exportReport() throws FileNotFoundException, JRException {
		List <Article> articleList = getArticles();
		String path = "C:\\Users\\WindowsReport\\Desktop";
		File file = ResourceUtils.getFile("classpath:articles.jrxml");
		JasperReport jasper = JasperCompileManager.compileReport(file.getAbsolutePath());
		JRBeanCollectionDataSource ds = new JRBeanCollectionDataSource(articleList);
		Map<String, Object> parameters = new HashMap<String, Object>();
		parameters.put("CTS", "Pro");
		
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasper, parameters, ds);
		
		
		JasperExportManager.exportReportToPdfFile(jasperPrint, path + "\\articles.pdf");

		return " Vous trouvez votre fichier pdf dans le chemin suivant: "+path + "\\articles.pdf";
	}
	
	@Override
	public void saveArticle(Iterable<Article> iterable) {
		articleRepository.saveAll(iterable);
	}

}
