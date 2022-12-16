package kr.co.metaField.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import kr.co.metaField.entity.MemberEntity;
import kr.co.metaField.service.MemberService;

@RestController
public class MemberController {
	
	@Autowired
	private MemberService memService;
	
	@GetMapping("/tetete")
	public List<MemberEntity> getMemberList() {
		return memService.getMemberList();
	}
	
	@GetMapping("/tttttt")
	public String getMember() {
		return memService.getMember();
	}
	
	@PostMapping("/qwer")
	public String geteeee(@RequestBody Map<String,String> test) {
		String tetet = test.get("test");
		System.out.println(tetet);
		return null;
	}
	

}
