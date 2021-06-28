package com.example.demo.controller;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.impl.UserService;

@RestController
public class UserController {

	@RequestMapping("/api/user")
	public Principal user(Principal user) {
		return user;
	}
	
	@Autowired
	private UserService userService;

	@PostMapping("/api/user/forgot-password")
	public String forgotPassword(@RequestParam String email) {

		String response = userService.forgotPassword(email);

		if (!response.startsWith("Invalid")) {
			response = "http://localhost:8080/api/user/reset-password?token=" + response;
		}
		return response;
	}

	@PutMapping("/api/user/reset-password")
	public String resetPassword(@RequestParam String token,
			@RequestParam String password) {

		return userService.resetPassword(token, password);
	}
	
	
}