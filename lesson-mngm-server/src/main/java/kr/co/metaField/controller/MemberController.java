package kr.co.metaField.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
	
	@GetMapping("/api/hellos")
	public String test(){
		return "dkdkdkdkdkddkkdkdk";
	}
	

}
