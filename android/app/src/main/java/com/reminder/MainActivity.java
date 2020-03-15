package com.reminder;


import android.app.Activity;
import android.content.Intent;
import android.graphics.Typeface;
import android.os.Bundle;
import android.os.Handler;
import android.support.annotation.Nullable;
import android.util.Log;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.calendarevents.CalendarEventsPackage;
import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.controllers.SplashActivity;
import com.reactnativenavigation.react.ReactDevPermission;

public class MainActivity extends SplashActivity {


    @Override
    public LinearLayout createSplashLayout() {
        setContentView(R.layout.splash);
        LinearLayout view = (LinearLayout) findViewById(R.id.anan);
        TextView textView = (TextView) findViewById(R.id.wellcome);
        TextView text = (TextView) findViewById(R.id.textView);
//        TextView wellcome = new TextView(this);
//        ImageView imageView = new ImageView(this);
//        imageView.setBackgroundResource(R.mipmap.ic_launcher_round);
//        view.setBackgroundColor(Color.parseColor("#2ABB9B"));
//        view.setGravity(Gravity.CENTER);
//        view.setOrientation(LinearLayout.VERTICAL);
//        view.setVerticalGravity(Gravity.CENTER);
//        view.setHorizontalGravity(Gravity.CENTER);
//
//        imageView.requestLayout();
//        imageView.getLayoutParams().height = 20;
//        imageView.getLayoutParams().width = 20;
        Typeface face = Typeface.createFromAsset(getAssets(),
                "B Koodak.ttf");
//        textView.setTextSize(29);
//        textView.setTextColor(Color.parseColor("#FFFFFF"));
//        textView.setText("صندوق قرض الحسنه شهید پورمیدانی");
        textView.setTypeface(face);
        text.setTypeface(face);
//        wellcome.setTextSize(37);
//        wellcome.setTextColor(Color.parseColor("#FFFFFF"));
//        wellcome.setText("خوش آمدید!");
//        wellcome.setTypeface(face);
//        imageView.setGravity(Gravity.CENTER);
//        imageView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);
//
//        view.addView(textView);
//        view.addView(wellcome);
        return view;
    }
    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        Log.d("fdfdfd","fdfdf");
        setIntent(intent);
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        CalendarEventsPackage.onRequestPermissionsResult(requestCode, permissions, grantResults);
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

}
