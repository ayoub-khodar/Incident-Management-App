package com.example.demo.service;

import java.io.FileNotFoundException;
import java.util.List;

import com.example.demo.entity.Article;

import net.sf.jasperreports.engine.JRException;

public interface IArticleService {
	List<Article> getArticles();
	
	void addArticle(Article article);
	
	void updateArticle(Article article);
	
	void deleteArticle(Long id);
	
	void saveArticle(Iterable<Article> iterable);
	
	String exportReport() throws FileNotFoundException, JRException;
}
