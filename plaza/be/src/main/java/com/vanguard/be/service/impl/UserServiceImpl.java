package com.vanguard.be.service.impl;

import com.vanguard.be.model.User;
import com.vanguard.be.repository.UserRepository;
import com.vanguard.be.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    /** The application logger */
    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);


    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        List<User> userList = userRepository.findAll();

        return userList;
    }

    @Override
    public User getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        return user;
    }

    @Override
    public User saveUser(User user) {
        User localUser = userRepository.findByUsername(user.getUsername());

        if (localUser != null) {
            user.setId(localUser.getId());
            LOG.info("User with username {} already exist. Update user information. ", user.getUsername());
            user = userRepository.save(user);
        } else {
            LOG.info("Create user {}. ", user.getUsername());
            user = userRepository.save(user);
        }

        return user;
    }
}
