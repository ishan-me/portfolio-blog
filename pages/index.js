import Head from 'next/head';
import NextLink from 'next/link';
import Image from 'next/image';
import { getBlogsAndCases } from '@/lib/data';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Box, Heading, Text, Button, Stack, Link } from '@chakra-ui/react';
import styles from '@/styles/Home.module.css';

const Home = ({ data }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Personal Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* intro section */}

        <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={800}
            fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
            lineHeight={'110%'}
          >
            Hi, I’m Dylan
            <br />
            <Text as={'span'} color={'purple.400'}>
              self taught designer & developer
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            I love building products that are user friendly and performant.
            Working professionally in the community has been a great experience
            and I’m excited to continue learning and growing as a leader.
          </Text>
          <Stack
            direction={'column'}
            align={'left'}
            alignSelf={'start'}
            position={'relative'}
          >
            <Button
              colorScheme={'purple'}
              bg={'purple.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'purple.500'
              }}
            >
              Let's work together
            </Button>
          </Stack>
        </Stack>

        {/* Blogs section */}

        <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading as="h3">Blog writing</Heading>
          {data?.blogs?.map((item, index) => (
            <NextLink key={index} href={`/blogs/${item.slug}`} passHref>
              <Link>
                <Box>
                  <Box
                    mt="1"
                    fontWeight="bold"
                    as="h4"
                    fontSize={'lg'}
                    lineHeight="tight"
                    isTruncated
                  >
                    {item.title}
                  </Box>

                  <Box fontSize={'sm'}>
                    {new Date(item.date).toDateString()}
                  </Box>
                </Box>
              </Link>
            </NextLink>
          ))}

          <Button>
            <NextLink href={`/blogs`} passHref>
              View all
            </NextLink>
          </Button>
        </Stack>

        {/* Case section */}

        <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading as="h3">Case Studies</Heading>
          {data?.case_studies?.map((item, index) => (
            <div key={index}>
              <NextLink href={`/cases/${item.slug}`} passHref>
                <Box
                  marginTop={{ base: '1', sm: '5' }}
                  display="flex"
                  flexDirection={{ base: 'column', sm: 'row' }}
                  justifyContent="space-between"
                >
                  <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center"
                  >
                    <Box
                      width={{ base: '100%', sm: '85%' }}
                      zIndex="2"
                      marginLeft={{ base: '0', sm: '5%' }}
                      marginTop="5%"
                    >
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Image
                          src={item.bannerImage.url}
                          width={item.bannerImage.width}
                          height={item.bannerImage.height}
                          alt="some good alt text"
                          objectFit="contain"
                        />
                      </Link>
                    </Box>
                    <Box
                      zIndex="1"
                      width="100%"
                      position="absolute"
                      height="100%"
                    >
                      <Box
                        color={'gray.500'}
                        backgroundSize="20px 20px"
                        opacity="0.4"
                        height="100%"
                      />
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}
                  >
                    <Heading marginTop="1">
                      <Link
                        textDecoration="none"
                        _hover={{ textDecoration: 'none' }}
                      >
                        {item.title}
                      </Link>
                    </Heading>
                    <Text as="p" marginTop="2" color={'gray.500'} fontSize="lg">
                      {item.subheading}
                    </Text>
                  </Box>
                </Box>
              </NextLink>
            </div>
          ))}
          <Button>
            <NextLink href={`/cases`} passHref>
              View all
            </NextLink>
          </Button>
        </Stack>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = await getBlogsAndCases();
  return {
    props: {
      data
    }
  };
};
