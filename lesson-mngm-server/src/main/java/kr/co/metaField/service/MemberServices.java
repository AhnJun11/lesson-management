package kr.co.metaField.service;

import java.util.List;

import kr.co.metaField.entity.MemberEntity;

public interface MemberService {
	
	List<MemberEntity> getMemberList();
	String getMember();

}
