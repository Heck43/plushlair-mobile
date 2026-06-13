// оййй тут анимация входа... можно погладки за красивый код??
import { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

// хук для плавного появления компонента снизу вверх~~
export function useEntranceStyle(delay = 0, offset = 12, scaleFrom = 0.985) {
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    const animation = Animated.timing(progress, {
      toValue: 1,
      duration: 420,
      delay,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    })

    animation.start()

    return () => animation.stop()
  }, [delay, progress])

  return {
    opacity: progress,
    transform: [
      {
        translateY: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [offset, 0],
        }),
      },
      {
        scale: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [scaleFrom, 1],
        }),
      },
    ],
  }
}
