package com.reminder;

import android.app.Activity;
import android.app.Application;
import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.os.Handler;

import com.facebook.react.ReactApplication;
import com.beefe.picker.PickerViewPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.reactcommunity.rnlanguages.RNLanguagesPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.calendarevents.CalendarEventsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.controllers.ActivityCallbacks;

public class MainApplication extends NavigationApplication {
  @Override
  public void onCreate() {
    super.onCreate();

    super.onCreate();
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.allowRTL(getApplicationContext(), false);
    SoLoader.init(this, /* native exopackage */ false);
    setActivityCallbacks(new ActivityCallbacks() {
      @Override
      public void onActivityCreated(Activity activity, Bundle savedInstanceState) {

      }

      @Override
      public void onActivityStarted(Activity activity) {

      }

      @Override
      public void onActivityResumed(Activity activity) {

      }

      @Override
      public void onActivityPaused(Activity activity) {

      }

      @Override
      public void onActivityStopped(Activity activity) {
//      activity.finish();

      }

      @Override
      public void onActivityResult(int requestCode, int resultCode, Intent data) {

      }

      @Override
      public void onActivityDestroyed(Activity activity) {
//        activity.finish();

      }
    });
  }

  @Override
  public boolean isDebug() {
    // Make sure you are using BuildConfig from your own application
    return BuildConfig.DEBUG;
  }

  protected List<ReactPackage> getPackages() {
    // Add additional packages you require here
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
             new VectorIconsPackage(),
            new CalendarEventsPackage(),
            new RNLanguagesPackage(),
            new LottiePackage(),
            new PickerViewPackage()// <-- Add this line

    );
  }

  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    return getPackages();
  }

  @Override
  public String getJSMainModuleName() {

    return "index";
  }


}
