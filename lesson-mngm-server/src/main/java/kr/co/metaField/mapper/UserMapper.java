package kr.co.metaField.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import kr.co.metaField.entity.UserEntity;

@Repository
@Mapper
public interface UserMapper {
	
	@Insert("INSERT INTO mf_user values (id,#{name},#{positionId},#{phoneNumber},#{shopId},NOW(),#{userNumber},null,null,null,null,null,#{gender},null);")
	public Integer insertUser(UserEntity user);
	
	@Select("SELECT id FROM mf_user where phoneNumber=#{phoneNumber}")
	public Integer getSearchUser(UserEntity user);
	
	@Insert("INSERT INTO mf_member values (id,#{centerMemo},#{proMemo},#{recommender},#{job},#{inflowRoute},#{id})")
	public Integer insertMember(UserEntity user);
	
	@Select("SELECT name FROM mf_user where name = #{name} and phoneNumber = #{phoneNumber} and isnull(loginId)")
	public String infoUser(UserEntity user); 
	
	@Select("SELECT id FROM mf_user where loginId = #{loginId}")
	public String idCheck(String loginId);
	
	@Update("UPDATE mf_user SET loginId = #{loginId} , loginPwd = #{loginPwd} WHERE name= #{name} and phoneNumber= #{phoneNumber}")
	public int registerUser(UserEntity user);

}
