package com.zdj.eblog.mapper.linkPart.delete;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LinkPartById {
  @Delete("delete from linkpart where id=#{id}")
  public void delete(int id);
}
