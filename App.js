import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import CourseList from "./screens/CourseList";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App(){
    return (
        <NavigationContainer>
            <Tab.Navigator  screenOptions={{
                tabBarLabelPosition:"below-icon",
                tabBarShowLabel:true,
                tabBarActiveTintColor: "navy",
                // tabBarInactiveTintColor:"#333",
            }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Courses" component={CourseList}/>
            <Tab.Screen name="Profile" 
            component={Profile}
            options={{
            tabBarLabel:"My profile",
            tabBarIcon: ()=> <Ionicons name="person" size={20} color={'navy'}/>,
            tabBarBadge: 3,
            }}
            />
               <Tab.Screen name="Nested" component={AboutStack}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}