import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

//Home stack screens
import HomeScreen from '../screens/Home/HomeScreen';

//Search stack screens
import SearchScreen from '../screens/Search/SearchScreen';

//notification stack screens
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';

//message stack screens
import MessagesScreen from '../screens/Messages/MessagesScreen';


//stacks
const HomeStack = createStackNavigator({
    HomeScreen
});

const SearchStack = createStackNavigator({
    SearchScreen
});

const NotificationStack = createStackNavigator({
    NotificationsScreen
});

const MessageStack = createStackNavigator({
    MessagesScreen
});


const MainTabNavigator = createBottomTabNavigator({
    Home: HomeStack,
    Search: SearchStack,
    Notifications: NotificationStack,
    Messages: MessageStack

});

export default MainTabNavigator;