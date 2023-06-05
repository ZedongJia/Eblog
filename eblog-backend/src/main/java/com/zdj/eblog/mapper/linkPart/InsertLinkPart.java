package com.zdj.eblog.mapper.linkPart;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface InsertLinkPart {
  @Insert("insert into linkpart values(null, #{label}, #{part}, Now(), #{content})")
  public void Insert(String label, String part, String content);
}
