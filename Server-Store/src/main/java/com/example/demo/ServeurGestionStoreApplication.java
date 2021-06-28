package com.example.demo;

//import org.springframework.boot.SpringApplication;
//import org.springframework.boot.autoconfigure.SpringBootApplication;
//
//@SpringBootApplication
//public class ServeurGestionStoreApplication {
//
//	public static void main(String[] args) {
//		SpringApplication.run(ServeurGestionStoreApplication.class, args);
//	}
//}

import java.util.Arrays;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.example.demo.entity.Article;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.ArticleRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.util.RoleEnum;

@SpringBootApplication
public class ServeurGestionStoreApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(ServeurGestionStoreApplication.class, args);
		
		ArticleRepository articleRepository = ctx.getBean(ArticleRepository.class);
//		 Date date1 = new Date(29,06,2019);
//		Date date2 = new Date(29,06,2019);
//		Date date3 = new Date(29,06,2019);
//
//			
//		articleRepository.save(new Article("art1",15,54,"Livre","Fr1",date1));
//		articleRepository.save(new Article("art2",15,54,"Stylo","Fr2",date2));
//		articleRepository.save(new Article("art3",15,30,"Voiture","Fr3",date3));
//		
		RoleRepository roleRepository = ctx.getBean(RoleRepository.class);
//		
//		Role roleUser = new Role(RoleEnum.ROLE_USER);
//		Role roleAdmin = new Role(RoleEnum.ROLE_ADMIN);
//		
//		roleRepository.save(roleUser);
//		roleRepository.save(roleAdmin);
//		
//		UserRepository userRepository = ctx.getBean(UserRepository.class);
//		
//		User user = new User("user2" , "ayoubayoub" , "developpement" , true);
//		user.setRoles(Arrays.asList(roleUser));
//		
//		userRepository.save(user);
//		
//		User admin = new User("admin" , "adminadmin" , "administration" , true);
//		admin.setRoles(Arrays.asList(roleUser , roleAdmin));
//		
//		userRepository.save(admin);

	}

}
