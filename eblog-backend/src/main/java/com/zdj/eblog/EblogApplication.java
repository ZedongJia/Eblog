package com.zdj.eblog;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.zdj.eblog.mapper")
public class EblogApplication {

	public static void main(String[] args) {
		SpringApplication.run(EblogApplication.class, args);
	}

}
