import React, { PureComponent } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    StatusBar,
    Image
} from 'react-native';
import { material } from 'react-native-typography';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Signature from '../routes/signature/signature';

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

export default class KTabBar extends PureComponent {
    state = {
        index: 0,
        routes: [
            { key: 'signature', title: 'Firma' },
            // { key: 'receipts', title: 'Scontrini' },
            // { key: 'token', title: 'Codici' }
        ],
    };

    _handleIndexChange = index => this.setState({ index });
    _renderHeader = props => <TabBar {...props} style={styles.tabbar} indicatorStyle={{ backgroundColor: '#CCFF90' }} />

    _renderIcon = props => <View style={{ width: '100%', height: '100%' }}>
        <Image
            source={require('../../images/logo.png')}
            style={styles.logo}
            resizeMode='contain'
        />
    </View>

    _renderScene = SceneMap({
        signature: Signature,
        // receipts: Receipts,
        // token: Token
    });

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#2A9732"
                    barStyle="light-content"
                />
                <View style={{ backgroundColor: '#4CAF50', width: '100%', height: 80, justifyContent:'center', alignItems:'center' }}>
                    <Image
                        source={require('../../images/logo.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                </View>
                <TabViewAnimated
                    style={styles.tabview}
                    navigationState={this.state}
                    renderScene={this._renderScene}
                    renderHeader={this._renderHeader}
                    onIndexChange={this._handleIndexChange}
                    initialLayout={initialLayout}
                    swipeEnabled={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width
    },
    tabbar: {
        backgroundColor: '#4CAF50'
    },
    tabview: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 40
    },
    logo: {
        width: 30
    }
});
