import os
import pathlib

from setuptools import setup, find_namespace_packages


VERSION=os.getenv('VERSION')
if not VERSION:
    raise Exception('No version in ENV!')

here = pathlib.Path(__file__).parent.resolve()
long_description = (here.parent / 'README.md').read_text(encoding='utf-8')

setup(
    name='speechly_api',
    version=VERSION,
    description='Speechly Public Protobuf Stubs',
    include_package_data=True,
    install_requires=['grpc>1.30'],
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/speechly/api/python',
    author='Speechly',
    keywords=['speech', 'asr', 'language', 'nlp'],
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'Topic :: Software Development :: Build Tools',
        'Programming Language :: Python :: 3 :: Only',
    ],
    packages=find_namespace_packages(where='src/', include='*'),
    package_dir={
        '': 'src'
    },
    python_requires='>=3.8',
    project_urls={
        'Speechly': 'https://www.speechly.com/',
        'Source': 'https://github.com/speechly/api'
    }
)
