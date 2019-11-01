package com.vanguard.be.controller;

import com.vanguard.be.model.User;
import com.vanguard.be.service.UserService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserResouce {

    private final UserService userService;

    public UserResouce(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/all")
    public List<User> getAllUsers(){
        List<User> userList = userService.getAllUsers();

        return userList;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public User createUser(@RequestBody User user) {
        user = userService.createUser(user);

        return user;
    }
}
