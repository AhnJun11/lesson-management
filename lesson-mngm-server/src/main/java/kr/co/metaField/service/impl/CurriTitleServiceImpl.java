package kr.co.metaField.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.metaField.entity.CurriTitleEntity;
import kr.co.metaField.mapper.CurriTitleMapper;
import kr.co.metaField.service.CurriTitleService;

@Service
public class CurriTitleServiceImpl implements CurriTitleService {
	
	@Autowired
	private CurriTitleMapper CurTiMapper;

	@Override
	public List<CurriTitleEntity> getCurriTitleList() {
		return CurTiMapper.getCurriTitle();
	}

}
