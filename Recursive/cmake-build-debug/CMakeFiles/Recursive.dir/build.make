# CMAKE generated file: DO NOT EDIT!
# Generated by "MinGW Makefiles" Generator, CMake Version 3.6

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

SHELL = cmd.exe

# The CMake executable.
CMAKE_COMMAND = "C:\Program Files (x86)\JetBrains\CLion 2016.3.3\bin\cmake\bin\cmake.exe"

# The command to remove a file.
RM = "C:\Program Files (x86)\JetBrains\CLion 2016.3.3\bin\cmake\bin\cmake.exe" -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = C:\Users\benja\CLionProjects\Recursive

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = C:\Users\benja\CLionProjects\Recursive\cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/Recursive.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/Recursive.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/Recursive.dir/flags.make

CMakeFiles/Recursive.dir/main.cpp.obj: CMakeFiles/Recursive.dir/flags.make
CMakeFiles/Recursive.dir/main.cpp.obj: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=C:\Users\benja\CLionProjects\Recursive\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/Recursive.dir/main.cpp.obj"
	C:\MinGW\bin\g++.exe   $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles\Recursive.dir\main.cpp.obj -c C:\Users\benja\CLionProjects\Recursive\main.cpp

CMakeFiles/Recursive.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/Recursive.dir/main.cpp.i"
	C:\MinGW\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E C:\Users\benja\CLionProjects\Recursive\main.cpp > CMakeFiles\Recursive.dir\main.cpp.i

CMakeFiles/Recursive.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/Recursive.dir/main.cpp.s"
	C:\MinGW\bin\g++.exe  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S C:\Users\benja\CLionProjects\Recursive\main.cpp -o CMakeFiles\Recursive.dir\main.cpp.s

CMakeFiles/Recursive.dir/main.cpp.obj.requires:

.PHONY : CMakeFiles/Recursive.dir/main.cpp.obj.requires

CMakeFiles/Recursive.dir/main.cpp.obj.provides: CMakeFiles/Recursive.dir/main.cpp.obj.requires
	$(MAKE) -f CMakeFiles\Recursive.dir\build.make CMakeFiles/Recursive.dir/main.cpp.obj.provides.build
.PHONY : CMakeFiles/Recursive.dir/main.cpp.obj.provides

CMakeFiles/Recursive.dir/main.cpp.obj.provides.build: CMakeFiles/Recursive.dir/main.cpp.obj


# Object files for target Recursive
Recursive_OBJECTS = \
"CMakeFiles/Recursive.dir/main.cpp.obj"

# External object files for target Recursive
Recursive_EXTERNAL_OBJECTS =

Recursive.exe: CMakeFiles/Recursive.dir/main.cpp.obj
Recursive.exe: CMakeFiles/Recursive.dir/build.make
Recursive.exe: CMakeFiles/Recursive.dir/linklibs.rsp
Recursive.exe: CMakeFiles/Recursive.dir/objects1.rsp
Recursive.exe: CMakeFiles/Recursive.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=C:\Users\benja\CLionProjects\Recursive\cmake-build-debug\CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable Recursive.exe"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles\Recursive.dir\link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/Recursive.dir/build: Recursive.exe

.PHONY : CMakeFiles/Recursive.dir/build

CMakeFiles/Recursive.dir/requires: CMakeFiles/Recursive.dir/main.cpp.obj.requires

.PHONY : CMakeFiles/Recursive.dir/requires

CMakeFiles/Recursive.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles\Recursive.dir\cmake_clean.cmake
.PHONY : CMakeFiles/Recursive.dir/clean

CMakeFiles/Recursive.dir/depend:
	$(CMAKE_COMMAND) -E cmake_depends "MinGW Makefiles" C:\Users\benja\CLionProjects\Recursive C:\Users\benja\CLionProjects\Recursive C:\Users\benja\CLionProjects\Recursive\cmake-build-debug C:\Users\benja\CLionProjects\Recursive\cmake-build-debug C:\Users\benja\CLionProjects\Recursive\cmake-build-debug\CMakeFiles\Recursive.dir\DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/Recursive.dir/depend

