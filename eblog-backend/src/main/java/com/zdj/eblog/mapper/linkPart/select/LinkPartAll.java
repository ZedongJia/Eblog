package com.zdj.eblog.mapper.linkPart.select;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.zdj.eblog.entity.LinkPart;

@Mapper
public interface LinkPartAll {
  @Select("select * from linkpart")
  public List<LinkPart> select();
}


