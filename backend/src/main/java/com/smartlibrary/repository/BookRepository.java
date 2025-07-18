package com.smartlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.smartlibrary.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
}
