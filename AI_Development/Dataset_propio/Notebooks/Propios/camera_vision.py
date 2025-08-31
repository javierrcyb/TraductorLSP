import cv2
import mediapipe as mp

mp_holistic = mp.solutions.holistic

# Definir keypoints según la figura
FACE_LANDMARKS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
BODY_LANDMARKS = [11, 12, 13, 14, 15, 16]  # hombros, codos, muñecas
LEFT_HAND_LANDMARKS = [
    17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39,
    41, 43, 45, 47, 49, 51, 53, 55
]
RIGHT_HAND_LANDMARKS = [
    18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
    42, 44, 46, 48, 50, 52, 54, 56
]

def draw_keypoints(image, landmarks, indices, color):
    """Dibuja puntos específicos dados sus índices."""
    for idx in indices:
        if idx < len(landmarks.landmark):
            x = int(landmarks.landmark[idx].x * image.shape[1])
            y = int(landmarks.landmark[idx].y * image.shape[0])
            cv2.circle(image, (x, y), 3, color, -1)

def main():
    cap = cv2.VideoCapture(0)

    with mp_holistic.Holistic(min_detection_confidence=0.5,
                              min_tracking_confidence=0.5) as holistic:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            image = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = holistic.process(image)
            image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

            # Cara
            if results.face_landmarks:
                draw_keypoints(image, results.face_landmarks, FACE_LANDMARKS, (0, 255, 0))

            # Cuerpo
            if results.pose_landmarks:
                draw_keypoints(image, results.pose_landmarks, BODY_LANDMARKS, (255, 0, 0))

                # Punto 57 (pecho)
                shoulder_left = results.pose_landmarks.landmark[11]
                shoulder_right = results.pose_landmarks.landmark[12]
                chest_x = int(((shoulder_left.x + shoulder_right.x) / 2) * frame.shape[1])
                chest_y = int(((shoulder_left.y + shoulder_right.y) / 2) * frame.shape[0])
                cv2.circle(image, (chest_x, chest_y), 3, (0, 0, 255), -1)

            # Mano izquierda
            if results.left_hand_landmarks:
                draw_keypoints(image, results.left_hand_landmarks, range(21), (255, 255, 0))

            # Mano derecha
            if results.right_hand_landmarks:
                draw_keypoints(image, results.right_hand_landmarks, range(21), (0, 255, 255))

            cv2.imshow('Keypoints LSP Tutor', image)
            if cv2.waitKey(5) & 0xFF == 27:
                break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
