
INSERT INTO authors (id, name)
  VALUES
    (1, 'John Snow'),
    (2, 'Lady Emma Tyrell'),
    (3, 'Danielle Targaryen'),
    (4, 'Sally Stark');
--
INSERT INTO genres (id, name)
  VALUES
    (1, 'Fitness'),
    (2, 'Hip-Hop'),
    (3, 'Gaming'),
    (4, 'Science'),
    (5, 'Culinary Arts');

INSERT INTO roles (id, name)
  VALUES
    (1, 'admin'),
    (2, 'user');

INSERT INTO books (id, title, author_id, genre_id, image)
  VALUES
    (1, 'A Game of Thrones', 2, 3, 'https://prodimage.images-bn.com/pimages/9780553573404_p0_v1_s550x406.jpg'),
    (2, 'A Clash of Kings', 1, 2, 'https://prodimage.images-bn.com/pimages/9780345535412_p0_v1_s550x406.jpg'),
    (3, 'A Dance of Dragons', 4, 1, 'https://prodimage.images-bn.com/pimages/9780553385953_p0_v1_s550x406.jpg'),
    (4, 'A Storm of Swords', 3, 4, 'https://prodimage.images-bn.com/pimages/9780553381702_p0_v1_s550x406.jpg'),
    (5, 'A Feast for Crows', 1, 5, 'https://prodimage.images-bn.com/pimages/9780553582031_p0_v1_s550x406.jpg');
