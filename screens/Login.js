import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "dinhtrivonguyen@gmail.com";
const VALID_PASSWORD = "contactme";

export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }
    if (password !== VALID_PASSWORD) {
      errors.push("password");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      navigation.navigate("Browse");
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold>
            Đăng nhập
          </Text>
          <Block middle>
            <Input
              label="Số điện thoại hoặc Email"
              error={hasErrors("email")}
              style={[styles.input, hasErrors("email")]}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              secure
              label="Mật khẩu"
              error={hasErrors("password")}
              style={[styles.input, hasErrors("password")]}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Đăng nhập
                </Text>
              )}
            </Button>

            <Button onPress={() => navigation.navigate("Forgot")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Quên mật khẩu
              </Text>
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});