package kr.co.metaField.entity;

import java.sql.Date;

import lombok.Data;

@Data
public class CurriTitleEntity {
	private Integer id;
	private String lessonName;
	private Integer total;
	private Integer period;
	private Integer usingState;
	private Date createAt;

}
