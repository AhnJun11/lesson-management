package kr.co.metaField.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import kr.co.metaField.entity.CurriTitleEntity;

@Repository
@Mapper
public interface CurriTitleMapper {
	
	@Select("SELECT * FROM mf_curri_title")
	public List<CurriTitleEntity> getCurriTitle();

}
