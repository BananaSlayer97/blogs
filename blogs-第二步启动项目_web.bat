set JAVA_HOME=%CD%\..\..\jdk\jdk1.8.0_45
set PATH=%JAVA_HOME%\bin;%M2_HOME%\bin;
cd %CD%\blogs-web\target

java -jar blogs-web.jar --spring.profiles.active=bijiben


pause
