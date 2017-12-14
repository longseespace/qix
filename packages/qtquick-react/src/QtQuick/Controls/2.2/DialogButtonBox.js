
  import { registerNativeComponentClass } from 'qml-renderer';
  import { createElement, Component } from 'react';

  const qmlContent = "import QtQuick.Controls 2.2\nDialogButtonBox {}";
  const NATIVE_COMPONENT_REGISTRY_NAME = 'QtQuick.Controls.DialogButtonBox_2.2'

  registerNativeComponentClass(NATIVE_COMPONENT_REGISTRY_NAME, qmlContent);

  export default class DialogButtonBox extends Component {
    setRef = qmlObject => (this.qmlObject = qmlObject);
    render() {
      var nextProps = {};

      for (var key in this.props) {
        nextProps[key] = this.props[key];
      }

      nextProps.ref = this.setRef;

      return createElement(NATIVE_COMPONENT_REGISTRY_NAME, nextProps);
    }
  }

  