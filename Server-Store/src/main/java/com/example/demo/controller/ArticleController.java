package com.example.demo.controller;

import java.io.ByteArrayInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.entity.Article;
import com.example.demo.entity.User;
import com.example.demo.repository.ArticleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.IArticleService;
import com.example.demo.service.impl.ExportArticleService;

import net.sf.jasperreports.engine.JRException;


@RestController
@RequestMapping("/api/article")
@CrossOrigin
public class ArticleController {
	
	@Autowired
	private IArticleService articleService;
	
	@Autowired
	private ArticleRepository articleRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	private ExportArticleService exportService;
	
//	@Autowired
//	private ExportArticleService exportService;

	@GetMapping
	public List<Article> getArticles(){
		return articleService.getArticles();
	}
	
	@PostMapping
	public void addArticle(@RequestBody Article article) {
		articleService.addArticle(article);
	}
	
	@PutMapping
	public void updateArticle(@RequestBody Article article) {
		articleService.updateArticle(article);
	}
	
	@DeleteMapping("/{id}")
	public void deleteArticle(@PathVariable Long id) {
		articleService.deleteArticle(id);
	}
	
	@PostMapping("/all")
	public ResponseEntity<List<Article>> addFile(@RequestBody List<Article> list) {
		articleService.saveArticle(list);
		return new ResponseEntity<>(list, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("/report/pdf")
	private String exportReports() throws FileNotFoundException, JRException {
		return articleService.exportReport();
	}
	
	@GetMapping("/export/pdf")
	public ResponseEntity<InputStreamResource> exportArticlesPdf(){
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Optional<User> user = Optional.of(userRepository.findByUsername(authentication.getName()));
		List<Article> articles =  (List<Article>)articleRepository.findAll();
		ByteArrayInputStream bais = exportService.articlesPDFReport(articles);
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Disposition", "inline; filename=articles.pdf");
		return ResponseEntity.ok().headers(headers).contentType(MediaType.APPLICATION_PDF).body(new InputStreamResource(bais));
	}
	
	@GetMapping("/export/excel")
	public ResponseEntity<InputStreamResource> exportArticlesExcel() throws IOException{
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		Optional<User> user = Optional.of(userRepository.findByUsername(authentication.getName()));
		List<Article> articles =  (List<Article>)articleRepository.findAll();
		ByteArrayInputStream bais = exportService.articlesExcelReport(articles);
		HttpHeaders headers = new HttpHeaders();
		headers.add("Content-Disposition", "inline; filename=articles.xlsx");
		return ResponseEntity.ok().headers(headers).body(new InputStreamResource(bais));
		}
	

}
