package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Role;
import com.example.demo.util.RoleEnum;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
	
	Role findByName(String name);

}
