package com.example.demo.service.impl;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Article;
import com.example.demo.service.IArticleService;
import com.example.demo.service.ICrudService;

@Service
public class ArticleMockServiceImpl implements IArticleService{

	private List<Article> articles;
	
	public ArticleMockServiceImpl() {
		articles = new ArrayList<Article>();
	    Date date1 = new Date(29,06,2019);
	    Date date2 = new Date(29,06,2019);
		Date date3 = new Date(29,06,2019);

		
		articles.add(new Article("art1",15,54,"Livre","Fr1",date1));
		articles.add(new Article("art2",15,54,"Stylo","Fr2",date2));
		articles.add(new Article("art3",15,30,"Voiture","Fr3",date3));

	}
	@Override
	public List<Article> getArticles() {
		return articles;
	}

	@Override
	public void addArticle(Article article) {
		articles.add(article);
	}

	@Override
	public void updateArticle(Article article) {
		articles.remove(article);
		articles.add(article);
		
	}

	@Override
	public void deleteArticle(Long id) {
		Article article = new Article();
		article.setId(id);
		articles.remove(article);
	}
	@Override
	public String exportReport() {
		// TODO Auto-generated method stub
		return null;
	}
	
	@Override
	public void saveArticle(Iterable<Article> iterable) {
		Iterator<Article> iterator = iterable.iterator();
		if(iterator.hasNext()) {
			articles.add(iterator.next());
		}
	}

}
