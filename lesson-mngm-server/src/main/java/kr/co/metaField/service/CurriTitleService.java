package kr.co.metaField.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.metaField.entity.CurriTitleEntity;
import kr.co.metaField.mapper.CurriTitleMapper;

@Service
public class CurriTitleService {
	
	@Autowired
	private CurriTitleMapper CurTiMapper;

	public List<CurriTitleEntity> getCurriTitleList() {
		return CurTiMapper.getCurriTitleList();
	}

}
