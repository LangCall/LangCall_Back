package com.langcall.config;

import com.langcall.security.CustomCorsConfig;
import com.langcall.security.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor // @RequiredArgsConstructor : 생성자를 만들어줘야 하는 번거러움을 해소 lombok
public class WebSecurityConfig {

    private final CustomUserDetailsService customUserDetailsService;
    private final CustomCorsConfig customCorsConfig;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests((authorizeRequest) ->
                        authorizeRequest
                                .requestMatchers("/api").hasRole("all") // 각 api에 권한을 부여함
                                .requestMatchers("/api-mento").hasRole("mento")
                                .anyRequest().authenticated()
                )
                .formLogin((form) ->
                        form
                                .usernameParameter("email")
                                .passwordParameter("password")
                                .defaultSuccessUrl("/", true)
                )
                .logout((logout) -> logout.permitAll())
                .httpBasic(Customizer.withDefaults()) // HTTP 기본 인증 지원하지만, 서블릿 기반 구성이 제공되는 즉시 HTTP 기본 인증을 명시적으로 제공해야 합니다.
                .cors(cors -> cors.configurationSource(customCorsConfig.corsConfigurationSource()));
        // CORS 설정을 명시적으로 추가
        return http.build();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            PasswordEncoder passwordEncoder) {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(customUserDetailsService);
        authenticationProvider.setPasswordEncoder(passwordEncoder);
        return new ProviderManager(authenticationProvider);
    }


    // 테스트용?
    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails userDetails = User.withDefaultPasswordEncoder()
                .username("user")
                .password("password")
                .roles("ALL")
                .build();
        UserDetails mentoDetails = User.withDefaultPasswordEncoder()
                .username("mento")
                .password("password")
                .roles("MENTO")
                .build();
        return new InMemoryUserDetailsManager(userDetails, mentoDetails);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}