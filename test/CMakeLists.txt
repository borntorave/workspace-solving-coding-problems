# CMakeLists.txt
cmake_minimum_required(VERSION 3.10)
project(test)

# Add all .cpp files in the source directory
file(GLOB SOURCES "*.cpp")

# Create an executable from the source files
add_executable(your_executable_name ${SOURCES})

