package kr.co.metaField.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.metaField.entity.MemberEntity;
import kr.co.metaField.mapper.MemberMapper;
import kr.co.metaField.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	private MemberMapper memMapper;
	
	@Override
	public List<MemberEntity> getMemberList() {
		return memMapper.getMemberList();
	}

	@Override
	public String getMember() {
		return memMapper.getMember();
	}
	

	

}
