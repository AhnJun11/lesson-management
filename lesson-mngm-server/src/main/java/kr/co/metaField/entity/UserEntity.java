package kr.co.metaField.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class UserEntity {
	private Integer id;
	private String name;
	private Integer position;
	private String phoneNumber;
	private Integer shopId;
	private Date createAt;
}
