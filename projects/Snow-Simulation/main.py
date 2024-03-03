import pygame
import random

pygame.init()

size_screen = (500, 500)
screen = pygame.display.set_mode(size_screen)
pygame.display.set_caption("Snow Simulation")

black_background = (0, 0, 0)
white_snow = (255, 255, 255)

snowFall = []

for i in range(100):
    x = random.randrange(0, 500)
    y = random.randrange(0, 500)
    snowFall.append([x, y])

clock = pygame.time.Clock()

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill(black_background)

    for i in range(len(snowFall)):
        pygame.draw.circle(screen, white_snow, snowFall[i], 2)
        snowFall[i][1] += 1
        if snowFall[i][1] > 500:
            y = random.randrange(-50, -10)
            snowFall[i][1] = y
            x = random.randrange(0, 500)
            snowFall[i][0] = x

    pygame.display.flip()
    clock.tick(24)

pygame.quit()
