package kr.co.metaField;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class LessonMngmServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(LessonMngmServerApplication.class, args);
	}

}
