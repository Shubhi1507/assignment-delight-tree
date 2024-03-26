import React, {ReactNode} from 'react';
import {TextStyle, Text, StyleSheet, StyleProp} from 'react-native';

interface TextHandlerProps {
  children?: ReactNode | string;
  style?: StyleProp<TextStyle>;
  type?: String;
  numberOfLine?: number;
  fontName?: string;
  allowAdjustFontSizeToFit?: boolean;
  allowFontScaling?: boolean;
}

const TextHandler = ({
  children,
  style,
  type,
  numberOfLine = 0,
  allowAdjustFontSizeToFit = false,
  allowFontScaling = false,
  fontName,
}: TextHandlerProps) => {
  return (
    <Text
      adjustsFontSizeToFit={allowAdjustFontSizeToFit}
      allowFontScaling={allowFontScaling}
      style={[
        styles.text,
        style ? style : {},
        fontName
          ? {fontFamily: `${fontName}`}
          : type
          ? {fontFamily: `Satoshi-${type}`}
          : {fontFamily: 'Satoshi-Regular'},
      ]}
      numberOfLines={numberOfLine}>
      {children ?? ''}
    </Text>
  );
};

export default TextHandler;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 12,
  },
});
