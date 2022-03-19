package com.example.icp7;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class SecondActivity extends AppCompatActivity {

    private Button logOut;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        logOut = findViewById(R.id.signout);

        logOut.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                action();
            }
        });
    }
    private void action (){
        Intent intent =    new Intent(SecondActivity.this,MainActivity.class);
        startActivity(intent);
    }
}