package com.example.icp7;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    private EditText userName;
    private EditText password;
    private Button login;
    private TextView text;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        userName = (EditText) findViewById(R.id.loginUsername);
        password = (EditText)findViewById(R.id.loginPassword);
        login = findViewById(R.id.loginButton);
        text = findViewById(R.id.displayMessage);

        login.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                validate(userName.getText().toString(),password.getText().toString());
            }
        });
    }

    private void validate(String userName, String password){
        if(userName.equals(password)){
            Intent intent =    new Intent(MainActivity.this,SecondActivity.class);
            startActivity(intent);
        }
        else{
text.setText("UserName/Password is incorrect");
        }
    }

}