import React from 'react';
import SignInScreen from '../screens/signIn';
import SignUpScreen from '../screens/signUp';
import ForgotPwdScreen from '../screens/forgotPwd';
import HomeScreen from '../screens/home';
import FavouritesScreen from '../screens/favourites';
import HistoryScreen from '../screens/history';
import CartScreen from '../screens/cart';
import AccountScreen from '../screens/account';
import Drawer from '../components/drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { COLORS, SIZES } from '../constants/theme';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from 'react-navigation-drawer';
import RestaurentDetails from '../screens/restaurent';

const authStack = createStackNavigator({
    signin: {
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    signup: {
        screen: SignUpScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    forgotpwd: {
        screen: ForgotPwdScreen,
        navigationOptions: {
            headerTitle: null,
            headerBackTitle: 'back',
            headerBackTitleStyle: {
                fontWeight: 'bold',
            },
            headerTintColor: COLORS.white,
            headerStyle: {
                backgroundColor: COLORS.primary,
            }
        }
    },
});

const homeStack = createStackNavigator({
    home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: COLORS.primary,
                shadowOpacity: 0,
            },
            headerTitle: 'Find Best Restaurents',
            headerTitleStyle: {
                color: COLORS.white,
                fontWeight: '800',
            },
            headerRight: (
                <Icon2 name="options-sharp"
                    size={30} color={COLORS.white}
                    style={{paddingRight: 10}}
                    onPress={() => { navigation.openDrawer() }}
                />
            ),
        })
    },
    restaurent: {
        screen: RestaurentDetails,
        navigationOptions: {
            headerTitle: null,
        }
    }
}, {
    defaultNavigationOptions: ({navigation}) => ({
        headerStyle: {
            backgroundColor: COLORS.primary,
            shadowOpacity: 0,
        },
        headerBackTitle: 'back',
        headerBackTitleStyle: {
            fontWeight: 'bold',
        },
        headerTintColor: COLORS.white,
    }),
})

const bottomStack = createBottomTabNavigator({
    history: {
        screen: HistoryScreen,
        navigationOptions: {
            tabBarLabel: 'History',
            tabBarIcon: ({tintColor, focused}) => <Icon name='history' size={focused ? 30: 20} color={tintColor} />
        }
    },
    cart: {
        screen: CartScreen,
        navigationOptions: {
            tabBarLabel: 'Cart',
            tabBarIcon: ({tintColor, focused}) => <Icon name='cart-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    home: {
        screen: homeStack,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({tintColor, focused}) => <Icon name='home-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    favourite: {
        screen: FavouritesScreen,
        navigationOptions: {
            tabBarLabel: 'Favourites',
            tabBarIcon: ({tintColor, focused}) => <Icon name='heart-outline' size={focused ? 30: 20} color={tintColor} />
        }
    },
    account: {
        screen: AccountScreen,
        navigationOptions: {
            tabBarLabel: 'Account',
            tabBarIcon: ({tintColor, focused}) => <Icon name='account-outline' size={focused ? 30: 20} color={tintColor} />
        }
    }
},{
    initialRouteName: 'home',
    tabBarOptions: {
        activeTintColor: COLORS.primary,
        inactiveTintColor: COLORS.grey,
        labelStyle: {
            fontWeight: 'bold',
        },
    }
});

const drawerStack = createDrawerNavigator({
    drawer: {
        screen: bottomStack,
    },
}, {
    contentComponent: Drawer,
    drawerPosition: 'right',
    drawerWidth: SIZES.width - 60
})

const mainStack = createSwitchNavigator({
    auth: {
        screen: authStack,
        navigationOptions: {
            headerShown: false,
        }
    },
    main : {
        screen: drawerStack,
    }
})

const router = createAppContainer(mainStack); 

export default router;