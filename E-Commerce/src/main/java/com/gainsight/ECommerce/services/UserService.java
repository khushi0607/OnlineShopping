package com.gainsight.ECommerce.services;

import com.gainsight.ECommerce.entity.Users;
import com.gainsight.ECommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public Users getUser(String username){
        Optional<Users> user= userRepository.findById(username);
        if(user.isPresent())
            return user.get();
        return null;
    }

    public boolean addUser(Users user){
        Users u= userRepository.save(user);
        return u!=null;
    }

}
