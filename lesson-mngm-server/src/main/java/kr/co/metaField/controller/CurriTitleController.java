package kr.co.metaField.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.co.metaField.entity.CurriTitleEntity;
import kr.co.metaField.service.CurriTitleService;

@RestController
public class CurriTitleController {
	
	@Autowired
	private CurriTitleService curTiService;
	
	@GetMapping("/curriculummngm")
	public List<CurriTitleEntity> getCurriTitleList() {
		return curTiService.getCurriTitleList();
	}

}
