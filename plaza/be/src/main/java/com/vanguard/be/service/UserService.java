package com.vanguard.be.service;

import com.vanguard.be.model.User;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    User getUserByUsername(String username);

    User saveUser(User user);
}
