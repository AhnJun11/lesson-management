package kr.co.metaField.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import kr.co.metaField.entity.MemberEntity;

@Repository
@Mapper
public interface MemberMapper {
	
	@Select("SELECT * FROM mf_members")
	public List<MemberEntity> getMemberList();
	
	@Select("SELECT name FROM mf_users where id=1")
	public String getMember();

}
