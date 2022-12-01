import pathlib

from setuptools import setup, find_namespace_packages


here = pathlib.Path(__file__).parent.resolve()
long_description = (here / 'README.md').read_text(encoding='utf-8')

setup(
    name='speechly_api',
    version='REVISION',
    description='Speechly Public Protobuf Stubs',
    include_package_data=True,
    install_requires=['grpcio>1.40', 'protobuf>3.20'],
    long_description=long_description,
    long_description_content_type='text/markdown',
    url='https://github.com/speechly/api/tree/master/python',
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
    python_requires='>=3.6',
    project_urls={
        'Speechly': 'https://www.speechly.com/',
        'Source': 'https://github.com/speechly/api'
    }
)
